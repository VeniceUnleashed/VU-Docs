---
title: LookAtTriggerEntityData (Frostbite Container)
---
### Base Classes

[TriggerEventEntityData](TriggerEventEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| LookAtTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| LookAtTriggerEntityData(LookAtTriggerEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| LookAtTriggerEntityData([TriggerEventEntityData](TriggerEventEntityData) other)    | Upcast an instance of type [TriggerEventEntityData](TriggerEventEntityData) to [LookAtTriggerEntityData](LookAtTriggerEntityData).    |
| LookAtTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [LookAtTriggerEntityData](LookAtTriggerEntityData).              |
| LookAtTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [LookAtTriggerEntityData](LookAtTriggerEntityData).                    |
| LookAtTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LookAtTriggerEntityData](LookAtTriggerEntityData).              |
| LookAtTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LookAtTriggerEntityData](LookAtTriggerEntityData).                            |
| LookAtTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LookAtTriggerEntityData](LookAtTriggerEntityData).                    |
| LookAtTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LookAtTriggerEntityData](LookAtTriggerEntityData).              |
| LookAtTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LookAtTriggerEntityData](LookAtTriggerEntityData). |

## Properties

| Name                  | Type                                             | Description |
| --------------------- | ------------------------------------------------ | ----------- |
| fov                   | number                                           |             |
| weapon                | [SoldierWeaponBlueprint](SoldierWeaponBlueprint) |             |
| zoomLevel             | number                                           |             |
| minDistanceToObject   | number                                           |             |
| maxDistanceToObject   | number                                           |             |
| startTriggerLookingAt | bool                                             |             |
| checkOcclusion        | bool                                             |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LookAtTriggerEntityData](LookAtTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LookAtTriggerEntityData](LookAtTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
