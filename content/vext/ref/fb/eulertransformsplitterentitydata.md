---
title: EulerTransformSplitterEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EulerTransformSplitterEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| EulerTransformSplitterEntityData(EulerTransformSplitterEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| EulerTransformSplitterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [EulerTransformSplitterEntityData](/vext/ref/fb/eulertransformsplitterentitydata/).                            |
| EulerTransformSplitterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EulerTransformSplitterEntityData](/vext/ref/fb/eulertransformsplitterentitydata/).                    |
| EulerTransformSplitterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EulerTransformSplitterEntityData](/vext/ref/fb/eulertransformsplitterentitydata/).              |
| EulerTransformSplitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EulerTransformSplitterEntityData](/vext/ref/fb/eulertransformsplitterentitydata/). |

## Properties

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| transform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm     | [Realm](/vext/ref/fb/realm/)                                          |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EulerTransformSplitterEntityData](/vext/ref/fb/eulertransformsplitterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EulerTransformSplitterEntityData](/vext/ref/fb/eulertransformsplitterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
