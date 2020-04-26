---
title: MeshMergingSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MeshMergingSettings](#constructor-0)**() |
| **[MeshMergingSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshMergingSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "statsSeedIndex" >}} | int |
| {{< prop "statsLodIndex" >}} | int |
| {{< prop "textureAtlasWidth" >}} | int |
| {{< prop "drawStatsEnable" >}} | bool |
| {{< prop "drawDebugTexturesEnable" >}} | bool |
| {{< prop "virtualTextureArrayStreamingEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "textureAtlasMergeEnable" >}} | bool |
| {{< prop "clearMergeReport" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshMergingSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshMergingSettings {#constructor-0}
> **MeshMergingSettings**()

Creates a new [MeshMergingSettings](/vext/ref/fb/meshmergingsettings) frostbite instance.

### MeshMergingSettings {#constructor-1}
> **MeshMergingSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshMergingSettings](/vext/ref/fb/meshmergingsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshMergingSettings {#constructor-2}
> **MeshMergingSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshMergingSettings](/vext/ref/fb/meshmergingsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshMergingSettings](/vext/ref/fb/meshmergingsettings). |

## Properties
### {{% prop-heading "statsSeedIndex" %}}
> **int**

### {{% prop-heading "statsLodIndex" %}}
> **int**

### {{% prop-heading "textureAtlasWidth" %}}
> **int**

### {{% prop-heading "drawStatsEnable" %}}
> **bool**

### {{% prop-heading "drawDebugTexturesEnable" %}}
> **bool**

### {{% prop-heading "virtualTextureArrayStreamingEnable" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

### {{% prop-heading "textureAtlasMergeEnable" %}}
> **bool**

### {{% prop-heading "clearMergeReport" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshMergingSettings](/vext/ref/fb/meshmergingsettings) type.

