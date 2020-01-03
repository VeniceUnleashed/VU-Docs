---
title: EulerTransformEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| EulerTransformEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| EulerTransformEntityData(EulerTransformEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| EulerTransformEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata/).                            |
| EulerTransformEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata/).                    |
| EulerTransformEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata/).              |
| EulerTransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata/). |

## Properties

| Name    | Type                              | Description |
| ------- | --------------------------------- | ----------- |
| in1     | [Vec3](/vext/ref/shared/class/vec3) |             |
| realm   | [Realm](/vext/ref/fb/realm/)                    |             |
| inValue | number                            |             |
| euler   | [ModifierEuler](/vext/ref/fb/modifiereuler/)    |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EulerTransformEntityData](/vext/ref/fb/eulertransformentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
