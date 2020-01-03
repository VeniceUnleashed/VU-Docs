---
title: MeshVariationDatabaseEntry
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| MeshVariationDatabaseEntry()                                                          | Create a new instance of this container type.                                                                                               |
| MeshVariationDatabaseEntry(MeshVariationDatabaseEntry other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| MeshVariationDatabaseEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry/). |

## Properties

| Name                   | Type                                                               | Description |
| ---------------------- | ------------------------------------------------------------------ | ----------- |
| mesh                   | [MeshAsset](/vext/ref/fb/meshasset/)                                             |             |
| variationAssetNameHash | number                                                             |             |
| materials              | [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial/)\[\] |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
