---
title: VisualEnvironmentReferenceObjectData
---
### Base Classes

[ReferenceObjectData](ReferenceObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VisualEnvironmentReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                                                   |
| VisualEnvironmentReferenceObjectData(VisualEnvironmentReferenceObjectData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| VisualEnvironmentReferenceObjectData([ReferenceObjectData](ReferenceObjectData) other)          | Upcast an instance of type [ReferenceObjectData](ReferenceObjectData) to [VisualEnvironmentReferenceObjectData](VisualEnvironmentReferenceObjectData).          |
| VisualEnvironmentReferenceObjectData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VisualEnvironmentReferenceObjectData](VisualEnvironmentReferenceObjectData).                    |
| VisualEnvironmentReferenceObjectData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VisualEnvironmentReferenceObjectData](VisualEnvironmentReferenceObjectData).              |
| VisualEnvironmentReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualEnvironmentReferenceObjectData](VisualEnvironmentReferenceObjectData). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| priority           | number |             |
| overrideVisibility | bool   |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualEnvironmentReferenceObjectData](VisualEnvironmentReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualEnvironmentReferenceObjectData](VisualEnvironmentReferenceObjectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
