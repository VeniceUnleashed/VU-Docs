---
title: UISettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| UISettings()                                                          | Create a new instance of this container type.                                                               |
| UISettings(UISettings other)                                          | Create a reference copy of an instance of the same type.                                                    |
| UISettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [UISettings](/vext/ref/fb/uisettings/).                    |
| UISettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISettings](/vext/ref/fb/uisettings/). |

## Properties

| Name              | Type                                       | Description |
| ----------------- | ------------------------------------------ | ----------- |
| system            | [UISystemType](/vext/ref/fb/uisystemtype/)               |             |
| bundles           | [UIBundlesAsset](/vext/ref/fb/uibundlesasset/)           |             |
| profileOptions    | [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset/) |             |
| language          | [LanguageFormat](/vext/ref/fb/languageformat/)           |             |
| dataCop           | [DataCopSettings](/vext/ref/fb/datacopsettings/)         |             |
| oneBundlePerGraph | bool                                       |             |
| drawEnable        | bool                                       |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [UISettings](/vext/ref/fb/uisettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISettings](/vext/ref/fb/uisettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
