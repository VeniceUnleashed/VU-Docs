---
title: RawFileImportActionParams
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| RawFileImportActionParams()                                                          | Create a new instance of this container type.                                                                                             |
| RawFileImportActionParams(RawFileImportActionParams other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| RawFileImportActionParams([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RawFileImportActionParams](/vext/ref/fb/rawfileimportactionparams/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| sourceFile | string |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [RawFileImportActionParams](/vext/ref/fb/rawfileimportactionparams/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RawFileImportActionParams](/vext/ref/fb/rawfileimportactionparams/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
