---
title: UITextureStreamingComponentData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| UITextureStreamingComponentData()                                                          | Create a new instance of this container type.                                                                                                         |
| UITextureStreamingComponentData(UITextureStreamingComponentData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| UITextureStreamingComponentData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UITextureStreamingComponentData](/vext/ref/fb/uitexturestreamingcomponentdata/).                  |
| UITextureStreamingComponentData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UITextureStreamingComponentData](/vext/ref/fb/uitexturestreamingcomponentdata/).                                      |
| UITextureStreamingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITextureStreamingComponentData](/vext/ref/fb/uitexturestreamingcomponentdata/). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UITextureStreamingComponentData](/vext/ref/fb/uitexturestreamingcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITextureStreamingComponentData](/vext/ref/fb/uitexturestreamingcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
