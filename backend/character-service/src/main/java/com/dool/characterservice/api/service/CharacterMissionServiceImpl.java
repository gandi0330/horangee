package com.dool.characterservice.api.service;

import com.dool.characterservice.api.request.CharacterMissionRequestDto;
import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.db.domain.CharacterMission;
import com.dool.characterservice.db.domain.Mission;
import com.dool.characterservice.db.domain.MissionType;
import com.dool.characterservice.db.domain.UserCharacter;
import com.dool.characterservice.db.repository.CharacterMissionRepository;
import com.dool.characterservice.db.repository.MissionRepository;
import com.dool.characterservice.db.repository.UserCharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CharacterMissionServiceImpl implements CharacterMissionService {
    private final UserCharacterRepository userCharacterRepository;
    private final CharacterMissionRepository characterMissionRepository;
    private final MissionRepository missionRepository;
    @Override
    public boolean getMission(Long user_character_id) {
        boolean status = false;
        LocalDate today = LocalDate.now();

        CharacterMission characterMission = characterMissionRepository.findTopByUserCharacter_IdAndMission_TypeOrderByCreatedDateDesc(user_character_id, MissionType.Personal).orElseGet(() ->
            postMission(CharacterMissionRequestDto.builder()
                    .user_character_id(user_character_id)
                    .build()));

        if(characterMission.isClear() && today.equals(characterMission.getCreatedDate())){
            status = true;
        }

        return status;
    }

    @Override
    public CharacterMission postMission(CharacterMissionRequestDto requestDto) {
        UserCharacter userCharacter = userCharacterRepository.findById(requestDto.getUser_character_id()).get();
        Mission mission = missionRepository.findById(userCharacter.getCharacters().getMissionId()).get();

        LocalDate today = LocalDate.now();

        CharacterMission characterMission = CharacterMission.builder()
                .userCharacter(userCharacter)
                .mission(mission)
                .createdDate(today)
                .isClear(false)
                .build();

        characterMissionRepository.save(characterMission);

        return characterMission;
    }

    @Override
    public Long countMission(Long user_character_id) {
        LocalDate date = LocalDate.now();

        Long count = characterMissionRepository.countAllByUserCharacter_IdAndCreatedDateLessThanAndIsClearTrueAndMission_Type(user_character_id, date, MissionType.Personal).orElse(0L) + 1;

        return count;
    }

    @Override
    public void complete(Long CMId) {
        CharacterMission characterMission = characterMissionRepository.findById(CMId).orElseThrow();
        characterMission.setClear(true);
    }
}
