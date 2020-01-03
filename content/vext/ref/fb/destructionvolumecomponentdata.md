---
title: DestructionVolumeComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionVolumeComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| DestructionVolumeComponentData(DestructionVolumeComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| DestructionVolumeComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DestructionVolumeComponentData](DestructionVolumeComponentData).                      |
| DestructionVolumeComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DestructionVolumeComponentData](DestructionVolumeComponentData).                    |
| DestructionVolumeComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DestructionVolumeComponentData](DestructionVolumeComponentData).              |
| DestructionVolumeComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionVolumeComponentData](DestructionVolumeComponentData). |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| destructionVolumeData | [DestructionVolumeData](DestructionVolumeData) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestructionVolumeComponentData](DestructionVolumeComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionVolumeComponentData](DestructionVolumeComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
