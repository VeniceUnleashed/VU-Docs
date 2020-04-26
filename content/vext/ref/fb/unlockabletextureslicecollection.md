---
title: UnlockableTextureSliceCollection
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UnlockableTextureSliceCollection](#constructor-0)**() |
| **[UnlockableTextureSliceCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UnlockableTextureSliceCollection](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "defaultValue" >}} | int |
| {{< prop "possibleValues" >}} | [TextureSliceUnlockPartData](/vext/ref/fb/texturesliceunlockpartdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UnlockableTextureSliceCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UnlockableTextureSliceCollection {#constructor-0}
> **UnlockableTextureSliceCollection**()

Creates a new [UnlockableTextureSliceCollection](/vext/ref/fb/unlockabletextureslicecollection) frostbite instance.

### UnlockableTextureSliceCollection {#constructor-1}
> **UnlockableTextureSliceCollection**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UnlockableTextureSliceCollection](/vext/ref/fb/unlockabletextureslicecollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UnlockableTextureSliceCollection {#constructor-2}
> **UnlockableTextureSliceCollection**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockableTextureSliceCollection](/vext/ref/fb/unlockabletextureslicecollection). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UnlockableTextureSliceCollection](/vext/ref/fb/unlockabletextureslicecollection). |

## Properties
### {{% prop-heading "defaultValue" %}}
> **int**

### {{% prop-heading "possibleValues" %}}
> **[TextureSliceUnlockPartData](/vext/ref/fb/texturesliceunlockpartdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UnlockableTextureSliceCollection](/vext/ref/fb/unlockabletextureslicecollection) type.

