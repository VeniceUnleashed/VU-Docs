---
title: TextureCompressSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[TextureCompressSettings](#constructor-0)**() |
| **[TextureCompressSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TextureCompressSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "viewMode" >}} | [TextureCompressQualityMode](/vext/ref/fb/texturecompressqualitymode) |
| {{< prop "textureCompressJobPoolSize" >}} | int |
| {{< prop "debugDrawAlphaOverlayScale" >}} | float |
| {{< prop "debugDrawEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TextureCompressSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TextureCompressSettings {#constructor-0}
> **TextureCompressSettings**()

Creates a new [TextureCompressSettings](/vext/ref/fb/texturecompresssettings) frostbite instance.

### TextureCompressSettings {#constructor-1}
> **TextureCompressSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TextureCompressSettings](/vext/ref/fb/texturecompresssettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TextureCompressSettings {#constructor-2}
> **TextureCompressSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureCompressSettings](/vext/ref/fb/texturecompresssettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TextureCompressSettings](/vext/ref/fb/texturecompresssettings). |

## Properties
### {{% prop-heading "viewMode" %}}
> **[TextureCompressQualityMode](/vext/ref/fb/texturecompressqualitymode)**

### {{% prop-heading "textureCompressJobPoolSize" %}}
> **int**

### {{% prop-heading "debugDrawAlphaOverlayScale" %}}
> **float**

### {{% prop-heading "debugDrawEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TextureCompressSettings](/vext/ref/fb/texturecompresssettings) type.

