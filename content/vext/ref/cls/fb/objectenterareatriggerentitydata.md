---
title: ObjectEnterAreaTriggerEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ObjectEnterAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| ObjectEnterAreaTriggerEntityData(ObjectEnterAreaTriggerEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| ObjectEnterAreaTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ObjectEnterAreaTriggerEntityData](ObjectEnterAreaTriggerEntityData).                            |
| ObjectEnterAreaTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ObjectEnterAreaTriggerEntityData](ObjectEnterAreaTriggerEntityData).                    |
| ObjectEnterAreaTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ObjectEnterAreaTriggerEntityData](ObjectEnterAreaTriggerEntityData).              |
| ObjectEnterAreaTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ObjectEnterAreaTriggerEntityData](ObjectEnterAreaTriggerEntityData). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| realm      | [Realm](Realm)           |             |
| updatePass | [UpdatePass](UpdatePass) |             |
| autoStart  | bool                     |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ObjectEnterAreaTriggerEntityData](ObjectEnterAreaTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ObjectEnterAreaTriggerEntityData](ObjectEnterAreaTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
