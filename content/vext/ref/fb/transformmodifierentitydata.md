---
title: TransformModifierEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformModifierEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| TransformModifierEntityData(TransformModifierEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| TransformModifierEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata/).                            |
| TransformModifierEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata/).                    |
| TransformModifierEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata/).              |
| TransformModifierEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata/). |

## Properties

| Name          | Type                                                    | Description |
| ------------- | ------------------------------------------------------- | ----------- |
| inValue       | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm         | [Realm](/vext/ref/fb/realm/)                                          |             |
| left          | [ModifierAxis](/vext/ref/fb/modifieraxis/)                            |             |
| up            | [ModifierAxis](/vext/ref/fb/modifieraxis/)                            |             |
| forward       | [ModifierAxis](/vext/ref/fb/modifieraxis/)                            |             |
| invertLeft    | bool                                                    |             |
| invertUp      | bool                                                    |             |
| invertForward | bool                                                    |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
