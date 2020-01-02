---
title: CharacterHealthComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterHealthComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| CharacterHealthComponentData(CharacterHealthComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CharacterHealthComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [CharacterHealthComponentData](CharacterHealthComponentData).                      |
| CharacterHealthComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterHealthComponentData](CharacterHealthComponentData).                    |
| CharacterHealthComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterHealthComponentData](CharacterHealthComponentData).              |
| CharacterHealthComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterHealthComponentData](CharacterHealthComponentData). |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| maxHealth                 | number |             |
| regenerateHealthPerSecond | number |             |
| regenerateHealth          | bool   |             |
| isImmortal                | bool   |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterHealthComponentData](CharacterHealthComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterHealthComponentData](CharacterHealthComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
