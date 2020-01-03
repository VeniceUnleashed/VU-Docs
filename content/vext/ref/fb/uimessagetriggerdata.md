---
title: UIMessageTriggerData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIMessageTriggerData()                                                          | Create a new instance of this container type.                                                                                   |
| UIMessageTriggerData(UIMessageTriggerData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIMessageTriggerData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [UIMessageTriggerData](UIMessageTriggerData).                            |
| UIMessageTriggerData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [UIMessageTriggerData](UIMessageTriggerData).                    |
| UIMessageTriggerData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [UIMessageTriggerData](UIMessageTriggerData).              |
| UIMessageTriggerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMessageTriggerData](UIMessageTriggerData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](Realm) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIMessageTriggerData](UIMessageTriggerData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMessageTriggerData](UIMessageTriggerData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
