---
title: CombatActionTriggerEntityData (Frostbite Container)
---
### Base Classes

[TriggerEntityData](TriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CombatActionTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| CombatActionTriggerEntityData(CombatActionTriggerEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| CombatActionTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [CombatActionTriggerEntityData](CombatActionTriggerEntityData).              |
| CombatActionTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [CombatActionTriggerEntityData](CombatActionTriggerEntityData).                    |
| CombatActionTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CombatActionTriggerEntityData](CombatActionTriggerEntityData).              |
| CombatActionTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CombatActionTriggerEntityData](CombatActionTriggerEntityData).                            |
| CombatActionTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CombatActionTriggerEntityData](CombatActionTriggerEntityData).                    |
| CombatActionTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CombatActionTriggerEntityData](CombatActionTriggerEntityData).              |
| CombatActionTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CombatActionTriggerEntityData](CombatActionTriggerEntityData). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| timeToTriggerOnNoAction | number |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CombatActionTriggerEntityData](CombatActionTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CombatActionTriggerEntityData](CombatActionTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
