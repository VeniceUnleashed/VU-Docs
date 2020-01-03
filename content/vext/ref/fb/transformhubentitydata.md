---
title: TransformHubEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| TransformHubEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| TransformHubEntityData(TransformHubEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| TransformHubEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TransformHubEntityData](TransformHubEntityData).                            |
| TransformHubEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TransformHubEntityData](TransformHubEntityData).                    |
| TransformHubEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TransformHubEntityData](TransformHubEntityData).              |
| TransformHubEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformHubEntityData](TransformHubEntityData). |

## Properties

| Name  | Type                                                    | Description |
| ----- | ------------------------------------------------------- | ----------- |
| in4   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in1   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in2   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in3   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in8   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in5   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in6   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in7   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm | [Realm](Realm)                                          |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TransformHubEntityData](TransformHubEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformHubEntityData](TransformHubEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
