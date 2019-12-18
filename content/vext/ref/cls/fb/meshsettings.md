---
title: MeshSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| MeshSettings()                                                          | Create a new instance of this container type.                                                                   |
| MeshSettings(MeshSettings other)                                        | Create a reference copy of an instance of the same type.                                                        |
| MeshSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MeshSettings](MeshSettings). |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| overrideShadersShaderName | string |             |
| overrideShadersMeshName   | string |             |
| forceLod                  | number |             |
| globalLodScale            | number |             |
| shadowDistanceScale       | number |             |
| loadingEnabled            | bool   |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [MeshSettings](MeshSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MeshSettings](MeshSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
