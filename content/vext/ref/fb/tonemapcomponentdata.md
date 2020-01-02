---
title: TonemapComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TonemapComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| TonemapComponentData(TonemapComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TonemapComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [TonemapComponentData](TonemapComponentData).                      |
| TonemapComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TonemapComponentData](TonemapComponentData).                    |
| TonemapComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TonemapComponentData](TonemapComponentData).              |
| TonemapComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TonemapComponentData](TonemapComponentData). |

## Properties

| Name                   | Type                              | Description |
| ---------------------- | --------------------------------- | ----------- |
| bloomScale             | [Vec3](/vext/ref/shared/class/Vec3) |             |
| realm                  | [Realm](Realm)                    |             |
| tonemapMethod          | [TonemapMethod](TonemapMethod)    |             |
| minExposure            | number                            |             |
| middleGray             | number                            |             |
| exposureAdjustTime     | number                            |             |
| maxExposure            | number                            |             |
| chromostereopsisOffset | number                            |             |
| chromostereopsisScale  | number                            |             |
| chromostereopsisEnable | bool                              |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TonemapComponentData](TonemapComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TonemapComponentData](TonemapComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
