---
title: BreakableControllerComponentData
---
### Base Classes

[DestructionControllerComponentData](DestructionControllerComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                      | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BreakableControllerComponentData()                                                                               | Create a new instance of this container type.                                                                                                                                |
| BreakableControllerComponentData(BreakableControllerComponentData other)                                         | Create a reference copy of an instance of the same type.                                                                                                                     |
| BreakableControllerComponentData([DestructionControllerComponentData](DestructionControllerComponentData) other) | Upcast an instance of type [DestructionControllerComponentData](DestructionControllerComponentData) to [BreakableControllerComponentData](BreakableControllerComponentData). |
| BreakableControllerComponentData([ComponentData](ComponentData) other)                                           | Upcast an instance of type [ComponentData](ComponentData) to [BreakableControllerComponentData](BreakableControllerComponentData).                                           |
| BreakableControllerComponentData([GameObjectData](GameObjectData) other)                                         | Upcast an instance of type [GameObjectData](GameObjectData) to [BreakableControllerComponentData](BreakableControllerComponentData).                                         |
| BreakableControllerComponentData([GameDataContainer](GameDataContainer) other)                                   | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BreakableControllerComponentData](BreakableControllerComponentData).                                   |
| BreakableControllerComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other)                      | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BreakableControllerComponentData](BreakableControllerComponentData).                      |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| breakablePartCount | number |             |
| networkIdCount     | number |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BreakableControllerComponentData](BreakableControllerComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BreakableControllerComponentData](BreakableControllerComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
