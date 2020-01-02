---
title: AILocoComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| AILocoComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| AILocoComponentData(AILocoComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| AILocoComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [AILocoComponentData](AILocoComponentData).                      |
| AILocoComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AILocoComponentData](AILocoComponentData).                    |
| AILocoComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AILocoComponentData](AILocoComponentData).              |
| AILocoComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AILocoComponentData](AILocoComponentData). |

## Properties

| Name                         | Type                                     | Description |
| ---------------------------- | ---------------------------------------- | ----------- |
| binding                      | [AILocoBinding](AILocoBinding)           |             |
| vaultBinding                 | [AILocoVaultBinding](AILocoVaultBinding) |             |
| coverBinding                 | [AILocoCoverBinding](AILocoCoverBinding) |             |
| wantedYaw                    | number                                   |             |
| animationEntitySpacePriority | number                                   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [AILocoComponentData](AILocoComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AILocoComponentData](AILocoComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
