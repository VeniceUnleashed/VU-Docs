---
title: DestructionControllerComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionControllerComponentData()                                                          | Create a new instance of this container type.                                                                                                               |
| DestructionControllerComponentData(DestructionControllerComponentData other)                  | Create a reference copy of an instance of the same type.                                                                                                    |
| DestructionControllerComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DestructionControllerComponentData](DestructionControllerComponentData).                      |
| DestructionControllerComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DestructionControllerComponentData](DestructionControllerComponentData).                    |
| DestructionControllerComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DestructionControllerComponentData](DestructionControllerComponentData).              |
| DestructionControllerComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionControllerComponentData](DestructionControllerComponentData). |

## Properties

| Name                  | Type                                   | Description |
| --------------------- | -------------------------------------- | ----------- |
| debrisClusters        | [ObjectBlueprint](ObjectBlueprint)\[\] |             |
| attachToNearbyObjects | bool                                   |             |

## Methods

| Type                                                                     | Name            | Parameters                                     |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionControllerComponentData](DestructionControllerComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionControllerComponentData](DestructionControllerComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
