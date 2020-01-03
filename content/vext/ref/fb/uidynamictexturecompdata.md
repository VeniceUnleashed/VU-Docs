---
title: UIDynamicTextureCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UIDynamicTextureCompData()                                                          | Create a new instance of this container type.                                                                                           |
| UIDynamicTextureCompData(UIDynamicTextureCompData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UIDynamicTextureCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIDynamicTextureCompData](/vext/ref/fb/uidynamictexturecompdata/).                  |
| UIDynamicTextureCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIDynamicTextureCompData](/vext/ref/fb/uidynamictexturecompdata/).                                      |
| UIDynamicTextureCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDynamicTextureCompData](/vext/ref/fb/uidynamictexturecompdata/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIDynamicTextureCompData](/vext/ref/fb/uidynamictexturecompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDynamicTextureCompData](/vext/ref/fb/uidynamictexturecompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
