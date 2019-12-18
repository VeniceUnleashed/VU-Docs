---
title: EulerTransformEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| EulerTransformEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| EulerTransformEntityData(EulerTransformEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| EulerTransformEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EulerTransformEntityData](EulerTransformEntityData).                            |
| EulerTransformEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EulerTransformEntityData](EulerTransformEntityData).                    |
| EulerTransformEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EulerTransformEntityData](EulerTransformEntityData).              |
| EulerTransformEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EulerTransformEntityData](EulerTransformEntityData). |

## Properties

| Name    | Type                              | Description |
| ------- | --------------------------------- | ----------- |
| in1     | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| realm   | [Realm](Realm)                    |             |
| inValue | number                            |             |
| euler   | [ModifierEuler](ModifierEuler)    |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EulerTransformEntityData](EulerTransformEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EulerTransformEntityData](EulerTransformEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
