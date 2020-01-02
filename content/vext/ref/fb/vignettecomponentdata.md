---
title: VignetteComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VignetteComponentData()                                                          | Create a new instance of this container type.                                                                                     |
| VignetteComponentData(VignetteComponentData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VignetteComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [VignetteComponentData](VignetteComponentData).                      |
| VignetteComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VignetteComponentData](VignetteComponentData).                    |
| VignetteComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VignetteComponentData](VignetteComponentData).              |
| VignetteComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VignetteComponentData](VignetteComponentData). |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| scale    | [Vec2](/vext/ref/shared/class/Vec2) |             |
| color    | [Vec3](/vext/ref/shared/class/Vec3) |             |
| realm    | [Realm](Realm)                    |             |
| exponent | number                            |             |
| opacity  | number                            |             |
| enable   | bool                              |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VignetteComponentData](VignetteComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VignetteComponentData](VignetteComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
