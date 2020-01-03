---
title: InputRestrictionEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| InputRestrictionEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| InputRestrictionEntityData(InputRestrictionEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| InputRestrictionEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [InputRestrictionEntityData](InputRestrictionEntityData).                    |
| InputRestrictionEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [InputRestrictionEntityData](InputRestrictionEntityData).              |
| InputRestrictionEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [InputRestrictionEntityData](InputRestrictionEntityData).                            |
| InputRestrictionEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [InputRestrictionEntityData](InputRestrictionEntityData).                    |
| InputRestrictionEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [InputRestrictionEntityData](InputRestrictionEntityData).              |
| InputRestrictionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputRestrictionEntityData](InputRestrictionEntityData). |

## Properties

| Name                              | Type | Description |
| --------------------------------- | ---- | ----------- |
| applyRestrictionsToSpecificPlayer | bool |             |
| throttle                          | bool |             |
| strafe                            | bool |             |
| brake                             | bool |             |
| handBrake                         | bool |             |
| clutch                            | bool |             |
| yaw                               | bool |             |
| pitch                             | bool |             |
| roll                              | bool |             |
| fire                              | bool |             |
| fireCountermeasure                | bool |             |
| altFire                           | bool |             |
| cycleRadioChannel                 | bool |             |
| selectMeleeWeapon                 | bool |             |
| zoom                              | bool |             |
| jump                              | bool |             |
| changeVehicle                     | bool |             |
| changeEntry                       | bool |             |
| changePose                        | bool |             |
| toggleParachute                   | bool |             |
| changeWeapon                      | bool |             |
| reload                            | bool |             |
| toggleCamera                      | bool |             |
| sprint                            | bool |             |
| scoreboardMenu                    | bool |             |
| mapZoom                           | bool |             |
| gearUp                            | bool |             |
| gearDown                          | bool |             |
| threeDimensionalMap               | bool |             |
| giveOrder                         | bool |             |
| prone                             | bool |             |
| switchPrimaryInventory            | bool |             |
| switchPrimaryWeapon               | bool |             |
| grenadeLauncher                   | bool |             |
| staticGadget                      | bool |             |
| dynamicGadget1                    | bool |             |
| dynamicGadget2                    | bool |             |
| meleeAttack                       | bool |             |
| throwGrenade                      | bool |             |
| selectWeapon1                     | bool |             |
| selectWeapon2                     | bool |             |
| selectWeapon3                     | bool |             |
| selectWeapon4                     | bool |             |
| selectWeapon5                     | bool |             |
| selectWeapon6                     | bool |             |
| selectWeapon7                     | bool |             |
| selectWeapon8                     | bool |             |
| selectWeapon9                     | bool |             |
| overridePreviousInputRestriction  | bool |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InputRestrictionEntityData](InputRestrictionEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputRestrictionEntityData](InputRestrictionEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
