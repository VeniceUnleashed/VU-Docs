---
title: TextureStreamingSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[TextureStreamingSettings](#constructor-0)**() |
| **[TextureStreamingSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TextureStreamingSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "fadeMipmapTime" >}} | float |
| {{< prop "mipmapBias" >}} | float |
| {{< prop "maxTextureSizeKb" >}} | int |
| {{< prop "maxFrameTextureCreateCount" >}} | int |
| {{< prop "maxPendingLoadCount" >}} | int |
| {{< prop "minMipmapCount" >}} | int |
| {{< prop "maxMipmapCount" >}} | int |
| {{< prop "xenonFinalPoolSizeAdjustment" >}} | int |
| {{< prop "xenonRetailPoolSizeAdjustment" >}} | int |
| {{< prop "poolHeadroomSize" >}} | int |
| {{< prop "onDemandPoolSize" >}} | int |
| {{< prop "listViewPageIndex" >}} | int |
| {{< prop "poolSize" >}} | int |
| {{< prop "forceMipmap" >}} | int |
| {{< prop "priorityThreshold" >}} | float |
| {{< prop "defragFrameTransferLimit" >}} | int |
| {{< prop "minTextureSize" >}} | int |
| {{< prop "maxFrameTextureCreateSize" >}} | int |
| {{< prop "onlyWantedInPool" >}} | bool |
| {{< prop "dxImmutableUsageEnable" >}} | bool |
| {{< prop "mipmapsEnable" >}} | bool |
| {{< prop "uploadMipmapsEnable" >}} | bool |
| {{< prop "textureUpdateEnable" >}} | bool |
| {{< prop "asyncCreatesEnable" >}} | bool |
| {{< prop "loadMipmapsEnable" >}} | bool |
| {{< prop "forceWantedEnable" >}} | bool |
| {{< prop "updateEnable" >}} | bool |
| {{< prop "poolEnable" >}} | bool |
| {{< prop "defragEnable" >}} | bool |
| {{< prop "defragTransfersEnable" >}} | bool |
| {{< prop "chunkLoadEnable" >}} | bool |
| {{< prop "instantUnloadingEnable" >}} | bool |
| {{< prop "fadeMipmapsEnable" >}} | bool |
| {{< prop "dynamicLoadingEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "drawStatsEnable" >}} | bool |
| {{< prop "drawTextureGroupStatsEnable" >}} | bool |
| {{< prop "drawTextureFormatStatsEnable" >}} | bool |
| {{< prop "drawLoadingListEnable" >}} | bool |
| {{< prop "drawPriorityListEnable" >}} | bool |
| {{< prop "overridePoolSize" >}} | bool |
| {{< prop "dumpLoadedList" >}} | bool |
| {{< prop "useConditionalStreaming" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TextureStreamingSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TextureStreamingSettings {#constructor-0}
> **TextureStreamingSettings**()

Creates a new [TextureStreamingSettings](/vext/ref/fb/texturestreamingsettings) frostbite instance.

### TextureStreamingSettings {#constructor-1}
> **TextureStreamingSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TextureStreamingSettings](/vext/ref/fb/texturestreamingsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TextureStreamingSettings {#constructor-2}
> **TextureStreamingSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureStreamingSettings](/vext/ref/fb/texturestreamingsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TextureStreamingSettings](/vext/ref/fb/texturestreamingsettings). |

## Properties
### {{% prop-heading "fadeMipmapTime" %}}
> **float**

### {{% prop-heading "mipmapBias" %}}
> **float**

### {{% prop-heading "maxTextureSizeKb" %}}
> **int**

### {{% prop-heading "maxFrameTextureCreateCount" %}}
> **int**

### {{% prop-heading "maxPendingLoadCount" %}}
> **int**

### {{% prop-heading "minMipmapCount" %}}
> **int**

### {{% prop-heading "maxMipmapCount" %}}
> **int**

### {{% prop-heading "xenonFinalPoolSizeAdjustment" %}}
> **int**

### {{% prop-heading "xenonRetailPoolSizeAdjustment" %}}
> **int**

### {{% prop-heading "poolHeadroomSize" %}}
> **int**

### {{% prop-heading "onDemandPoolSize" %}}
> **int**

### {{% prop-heading "listViewPageIndex" %}}
> **int**

### {{% prop-heading "poolSize" %}}
> **int**

### {{% prop-heading "forceMipmap" %}}
> **int**

### {{% prop-heading "priorityThreshold" %}}
> **float**

### {{% prop-heading "defragFrameTransferLimit" %}}
> **int**

### {{% prop-heading "minTextureSize" %}}
> **int**

### {{% prop-heading "maxFrameTextureCreateSize" %}}
> **int**

### {{% prop-heading "onlyWantedInPool" %}}
> **bool**

### {{% prop-heading "dxImmutableUsageEnable" %}}
> **bool**

### {{% prop-heading "mipmapsEnable" %}}
> **bool**

### {{% prop-heading "uploadMipmapsEnable" %}}
> **bool**

### {{% prop-heading "textureUpdateEnable" %}}
> **bool**

### {{% prop-heading "asyncCreatesEnable" %}}
> **bool**

### {{% prop-heading "loadMipmapsEnable" %}}
> **bool**

### {{% prop-heading "forceWantedEnable" %}}
> **bool**

### {{% prop-heading "updateEnable" %}}
> **bool**

### {{% prop-heading "poolEnable" %}}
> **bool**

### {{% prop-heading "defragEnable" %}}
> **bool**

### {{% prop-heading "defragTransfersEnable" %}}
> **bool**

### {{% prop-heading "chunkLoadEnable" %}}
> **bool**

### {{% prop-heading "instantUnloadingEnable" %}}
> **bool**

### {{% prop-heading "fadeMipmapsEnable" %}}
> **bool**

### {{% prop-heading "dynamicLoadingEnable" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

### {{% prop-heading "drawStatsEnable" %}}
> **bool**

### {{% prop-heading "drawTextureGroupStatsEnable" %}}
> **bool**

### {{% prop-heading "drawTextureFormatStatsEnable" %}}
> **bool**

### {{% prop-heading "drawLoadingListEnable" %}}
> **bool**

### {{% prop-heading "drawPriorityListEnable" %}}
> **bool**

### {{% prop-heading "overridePoolSize" %}}
> **bool**

### {{% prop-heading "dumpLoadedList" %}}
> **bool**

### {{% prop-heading "useConditionalStreaming" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TextureStreamingSettings](/vext/ref/fb/texturestreamingsettings) type.

