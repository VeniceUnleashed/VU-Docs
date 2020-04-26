---
title: TerrainStreamingSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[TerrainStreamingSettings](#constructor-0)**() |
| **[TerrainStreamingSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TerrainStreamingSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dataLoadJobCount" >}} | int |
| {{< prop "activeFreeStreamingDataLoadJobCount" >}} | int |
| {{< prop "heightfieldAtlasSampleCountXFactor" >}} | int |
| {{< prop "additionalBlurriness" >}} | int |
| {{< prop "invisibleDetailReductionFactor" >}} | float |
| {{< prop "occludedDetailReductionFactor" >}} | float |
| {{< prop "heightfieldAtlasSampleCountYFactor" >}} | int |
| {{< prop "maskAtlasSampleCountYFactor" >}} | int |
| {{< prop "colorAdditionalBlurriness" >}} | int |
| {{< prop "maskAtlasSampleCountXFactor" >}} | int |
| {{< prop "maskAdditionalBlurriness" >}} | int |
| {{< prop "colorAtlasSampleCountXFactor" >}} | int |
| {{< prop "colorAtlasSampleCountYFactor" >}} | int |
| {{< prop "keepPoolFullEnable" >}} | bool |
| {{< prop "loadOccluderDataEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TerrainStreamingSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TerrainStreamingSettings {#constructor-0}
> **TerrainStreamingSettings**()

Creates a new [TerrainStreamingSettings](/vext/ref/fb/terrainstreamingsettings) frostbite instance.

### TerrainStreamingSettings {#constructor-1}
> **TerrainStreamingSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TerrainStreamingSettings](/vext/ref/fb/terrainstreamingsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TerrainStreamingSettings {#constructor-2}
> **TerrainStreamingSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainStreamingSettings](/vext/ref/fb/terrainstreamingsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TerrainStreamingSettings](/vext/ref/fb/terrainstreamingsettings). |

## Properties
### {{% prop-heading "dataLoadJobCount" %}}
> **int**

### {{% prop-heading "activeFreeStreamingDataLoadJobCount" %}}
> **int**

### {{% prop-heading "heightfieldAtlasSampleCountXFactor" %}}
> **int**

### {{% prop-heading "additionalBlurriness" %}}
> **int**

### {{% prop-heading "invisibleDetailReductionFactor" %}}
> **float**

### {{% prop-heading "occludedDetailReductionFactor" %}}
> **float**

### {{% prop-heading "heightfieldAtlasSampleCountYFactor" %}}
> **int**

### {{% prop-heading "maskAtlasSampleCountYFactor" %}}
> **int**

### {{% prop-heading "colorAdditionalBlurriness" %}}
> **int**

### {{% prop-heading "maskAtlasSampleCountXFactor" %}}
> **int**

### {{% prop-heading "maskAdditionalBlurriness" %}}
> **int**

### {{% prop-heading "colorAtlasSampleCountXFactor" %}}
> **int**

### {{% prop-heading "colorAtlasSampleCountYFactor" %}}
> **int**

### {{% prop-heading "keepPoolFullEnable" %}}
> **bool**

### {{% prop-heading "loadOccluderDataEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TerrainStreamingSettings](/vext/ref/fb/terrainstreamingsettings) type.

