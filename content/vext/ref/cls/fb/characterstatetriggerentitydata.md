---
title: CharacterStateTriggerEntityData (Frostbite Container)
---
### Base Classes

[TriggerEntityData](TriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterStateTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| CharacterStateTriggerEntityData(CharacterStateTriggerEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| CharacterStateTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData).              |
| CharacterStateTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData).                    |
| CharacterStateTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData).              |
| CharacterStateTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData).                            |
| CharacterStateTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData).                    |
| CharacterStateTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData).              |
| CharacterStateTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData). |

## Properties

| Name                                | Type                                             | Description |
| ----------------------------------- | ------------------------------------------------ | ----------- |
| activeWeaponSlot                    | number                                           |             |
| pitch                               | number                                           |             |
| characterPose                       | [CharacterPoseAction](CharacterPoseAction)       |             |
| ammoToSet                           | number                                           |             |
| poseToCheck                         | [CharacterPoseAction](CharacterPoseAction)       |             |
| weapon                              | [SoldierWeaponBlueprint](SoldierWeaponBlueprint) |             |
| healthToSet                         | number                                           |             |
| healthToCheck                       | number                                           |             |
| seatIndex                           | number                                           |             |
| excludeConnectedVehicles            | bool                                             |             |
| continueToCheckIfHoldingWrongWeapon | bool                                             |             |
| stayInVehicleOnMove                 | bool                                             |             |
| checkHealthGreaterOrEqual           | bool                                             |             |
| checkAllWeapons                     | bool                                             |             |
| shouldCheckSeatIndex                | bool                                             |             |
| useExitPointWhenLeavingVehicle      | bool                                             |             |
| disablePhysicsWhenLeavingVehicle    | bool                                             |             |
| usePitch                            | bool                                             |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterStateTriggerEntityData](CharacterStateTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
