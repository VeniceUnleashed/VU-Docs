---
title: PersistenceConfiguration
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PersistenceConfiguration()                                                          | Create a new instance of this container type.                                                                                           |
| PersistenceConfiguration(PersistenceConfiguration other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PersistenceConfiguration([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration/).                                      |
| PersistenceConfiguration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration/). |

## Properties

| Name                       | Type                                                     | Description |
| -------------------------- | -------------------------------------------------------- | ----------- |
| statCategoryTreeCollection | [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection/) |             |
| mpProfile                  | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/)                   |             |
| spProfile                  | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/)                   |             |
| coopProfile                | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/)                   |             |
| pointSystemParams          | [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset/)         |             |
| licenseConfig              | [LicenseConfiguration](/vext/ref/fb/licenseconfiguration/)             |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
