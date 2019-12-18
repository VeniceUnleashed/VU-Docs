---
title: TransformSelectorEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformSelectorEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| TransformSelectorEntityData(TransformSelectorEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| TransformSelectorEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TransformSelectorEntityData](TransformSelectorEntityData).                            |
| TransformSelectorEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TransformSelectorEntityData](TransformSelectorEntityData).                    |
| TransformSelectorEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TransformSelectorEntityData](TransformSelectorEntityData).              |
| TransformSelectorEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TransformSelectorEntityData](TransformSelectorEntityData). |

## Properties

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| in1       | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| in2       | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| realm     | [Realm](Realm)                                          |             |
| selection | bool                                                    |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformSelectorEntityData](TransformSelectorEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TransformSelectorEntityData](TransformSelectorEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
