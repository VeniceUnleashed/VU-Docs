---
title: InputRestrictionEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| InputRestrictionEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| InputRestrictionEntityData(InputRestrictionEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| InputRestrictionEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata/).                    |
| InputRestrictionEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata/).              |
| InputRestrictionEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata/).                            |
| InputRestrictionEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata/).                    |
| InputRestrictionEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata/).              |
| InputRestrictionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata/). |

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
| [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
