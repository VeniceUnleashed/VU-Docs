---
title: PlayerInputTriggerEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| PlayerInputTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| PlayerInputTriggerEntityData(PlayerInputTriggerEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| PlayerInputTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PlayerInputTriggerEntityData](PlayerInputTriggerEntityData).                            |
| PlayerInputTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PlayerInputTriggerEntityData](PlayerInputTriggerEntityData).                    |
| PlayerInputTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PlayerInputTriggerEntityData](PlayerInputTriggerEntityData).              |
| PlayerInputTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PlayerInputTriggerEntityData](PlayerInputTriggerEntityData). |

## Properties

| Name                    | Type                                         | Description |
| ----------------------- | -------------------------------------------- | ----------- |
| realm                   | [Realm](Realm)                               |             |
| entryInputActions       | [EntryInputActionEnum](EntryInputActionEnum) |             |
| valueModifier           | number                                       |             |
| trailingValueAtStart    | number                                       |             |
| accumulatedValueAtStart | number                                       |             |
| sendTriggerEvents       | bool                                         |             |
| enabledFromStart        | bool                                         |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerInputTriggerEntityData](PlayerInputTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PlayerInputTriggerEntityData](PlayerInputTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
