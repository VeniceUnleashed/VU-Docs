---
title: ComponentData
---
### Base Classes

[GameObjectData](GameObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ComponentData()                                                          | Create a new instance of this container type.                                                                     |
| ComponentData(ComponentData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| ComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ComponentData](ComponentData).                    |
| ComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ComponentData](ComponentData).              |
| ComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ComponentData](ComponentData). |

## Properties

| Name       | Type                                                    | Description |
| ---------- | ------------------------------------------------------- | ----------- |
| transform  | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| components | [GameObjectData](GameObjectData)\[\]                    |             |
| excluded   | bool                                                    |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [ComponentData](ComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ComponentData](ComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
