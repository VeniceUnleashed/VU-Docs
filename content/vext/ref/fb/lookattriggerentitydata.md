---
title: LookAtTriggerEntityData
---
### Base Classes

[TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| LookAtTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| LookAtTriggerEntityData(LookAtTriggerEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| LookAtTriggerEntityData([TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/) other)    | Upcast an instance of type [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/).    |
| LookAtTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/).              |
| LookAtTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/).                    |
| LookAtTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/).              |
| LookAtTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/).                            |
| LookAtTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/).                    |
| LookAtTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/).              |
| LookAtTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/). |

## Properties

| Name                  | Type                                             | Description |
| --------------------- | ------------------------------------------------ | ----------- |
| fov                   | number                                           |             |
| weapon                | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/) |             |
| zoomLevel             | number                                           |             |
| minDistanceToObject   | number                                           |             |
| maxDistanceToObject   | number                                           |             |
| startTriggerLookingAt | bool                                             |             |
| checkOcclusion        | bool                                             |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
