---
title: MovieTextureAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[MovieTextureAsset](#constructor-0)**() |
| **[MovieTextureAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MovieTextureAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MovieTextureAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "chunkGuid" >}} | [Guid](/vext/ref/shared/class/guid) |
| {{< prop "chunkSize" >}} | int |
| {{< prop "subtitleChunkGuid" >}} | [Guid](/vext/ref/shared/class/guid) |
| {{< prop "subtitleChunkSize" >}} | int |
| {{< prop "hasLocalizedAudioTracks" >}} | bool |
| {{< prop "overrideBackgroundMusic" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MovieTextureAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MovieTextureAsset {#constructor-0}
> **MovieTextureAsset**()

Creates a new [MovieTextureAsset](/vext/ref/fb/movietextureasset) frostbite instance.

### MovieTextureAsset {#constructor-1}
> **MovieTextureAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MovieTextureAsset](/vext/ref/fb/movietextureasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MovieTextureAsset {#constructor-2}
> **MovieTextureAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MovieTextureAsset](/vext/ref/fb/movietextureasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MovieTextureAsset](/vext/ref/fb/movietextureasset). |

### MovieTextureAsset {#constructor-3}
> **MovieTextureAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovieTextureAsset](/vext/ref/fb/movietextureasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MovieTextureAsset](/vext/ref/fb/movietextureasset). |

## Properties
### {{% prop-heading "chunkGuid" %}}
> **[Guid](/vext/ref/shared/class/guid)**

### {{% prop-heading "chunkSize" %}}
> **int**

### {{% prop-heading "subtitleChunkGuid" %}}
> **[Guid](/vext/ref/shared/class/guid)**

### {{% prop-heading "subtitleChunkSize" %}}
> **int**

### {{% prop-heading "hasLocalizedAudioTracks" %}}
> **bool**

### {{% prop-heading "overrideBackgroundMusic" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MovieTextureAsset](/vext/ref/fb/movietextureasset) type.

