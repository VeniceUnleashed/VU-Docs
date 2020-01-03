---
title: ReferenceObjectData
---
### Base Classes

[GameObjectData](/vext/ref/fb/gameobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                 |
| ReferenceObjectData(ReferenceObjectData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ReferenceObjectData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/).                    |
| ReferenceObjectData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/).              |
| ReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/). |

## Properties

| Name                | Type                                                    | Description |
| ------------------- | ------------------------------------------------------- | ----------- |
| blueprintTransform  | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| blueprint           | [Blueprint](/vext/ref/fb/blueprint/)                                  |             |
| objectVariation     | [ObjectVariation](/vext/ref/fb/objectvariation/)                      |             |
| streamRealm         | [StreamRealm](/vext/ref/fb/streamrealm/)                              |             |
| castSunShadowEnable | bool                                                    |             |
| excluded            | bool                                                    |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
