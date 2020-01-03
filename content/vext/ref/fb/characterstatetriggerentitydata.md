---
title: CharacterStateTriggerEntityData
---
### Base Classes

[TriggerEntityData](/vext/ref/fb/triggerentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterStateTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| CharacterStateTriggerEntityData(CharacterStateTriggerEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| CharacterStateTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/).              |
| CharacterStateTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/).                    |
| CharacterStateTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/).              |
| CharacterStateTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/).                            |
| CharacterStateTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/).                    |
| CharacterStateTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/).              |
| CharacterStateTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/). |

## Properties

| Name                                | Type                                             | Description |
| ----------------------------------- | ------------------------------------------------ | ----------- |
| activeWeaponSlot                    | number                                           |             |
| pitch                               | number                                           |             |
| characterPose                       | [CharacterPoseAction](/vext/ref/fb/characterposeaction/)       |             |
| ammoToSet                           | number                                           |             |
| poseToCheck                         | [CharacterPoseAction](/vext/ref/fb/characterposeaction/)       |             |
| weapon                              | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/) |             |
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
| [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
