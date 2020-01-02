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
| MeshVariationDatabaseEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshVariationDatabaseEntry](MeshVariationDatabaseEntry). |

## Properties

| Name                   | Type                                                               | Description |
| ---------------------- | ------------------------------------------------------------------ | ----------- |
| mesh                   | [MeshAsset](MeshAsset)                                             |             |
| variationAssetNameHash | number                                                             |             |
| materials              | [MeshVariationDatabaseMaterial](MeshVariationDatabaseMaterial)\[\] |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MeshVariationDatabaseEntry](MeshVariationDatabaseEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshVariationDatabaseEntry](MeshVariationDatabaseEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
