---
title: TextureSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[TextureSettings](#constructor-0)**() |
| **[TextureSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TextureSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "skipMipmapCount" >}} | int |
| {{< prop "loadingEnabled" >}} | bool |
| {{< prop "renderTexturesEnabled" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TextureSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TextureSettings {#constructor-0}
> **TextureSettings**()

Creates a new [TextureSettings](/vext/ref/fb/texturesettings) frostbite instance.

### TextureSettings {#constructor-1}
> **TextureSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TextureSettings](/vext/ref/fb/texturesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TextureSettings {#constructor-2}
> **TextureSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureSettings](/vext/ref/fb/texturesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TextureSettings](/vext/ref/fb/texturesettings). |

## Properties
### {{% prop-heading "skipMipmapCount" %}}
> **int**

### {{% prop-heading "loadingEnabled" %}}
> **bool**

### {{% prop-heading "renderTexturesEnabled" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TextureSettings](/vext/ref/fb/texturesettings) type.

