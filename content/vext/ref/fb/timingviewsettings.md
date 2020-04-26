---
title: TimingViewSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[TimingViewSettings](#constructor-0)**() |
| **[TimingViewSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TimingViewSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxFrameEventCount" >}} | int |
| {{< prop "frameCount" >}} | int |
| {{< prop "frameDelayCount" >}} | int |
| {{< prop "timeRange" >}} | float |
| {{< prop "timeOffset" >}} | float |
| {{< prop "autolockThreshold" >}} | float |
| {{< prop "autolockNameFilter" >}} | string |
| {{< prop "legendScreenOffset" >}} | int |
| {{< prop "legendColumnWidth" >}} | int |
| {{< prop "legendDisplayMode" >}} | int |
| {{< prop "averageFrameCount" >}} | int |
| {{< prop "maxGpuLegendColumnCount" >}} | int |
| {{< prop "snoopEventName" >}} | string |
| {{< prop "gpuBarFrameOffset" >}} | int |
| {{< prop "maxCpuLegendColumnCount" >}} | int |
| {{< prop "barPad" >}} | int |
| {{< prop "maxSpuLegendColumnCount" >}} | int |
| {{< prop "barSyncProcessor" >}} | int |
| {{< prop "barMinTime" >}} | float |
| {{< prop "barHeight" >}} | int |
| {{< prop "filterEventName" >}} | string |
| {{< prop "snoopOnly" >}} | bool |
| {{< prop "drawEnable" >}} | bool |
| {{< prop "drawSpuLegendEnable" >}} | bool |
| {{< prop "snoopEnable" >}} | bool |
| {{< prop "filterEnable" >}} | bool |
| {{< prop "drawBarsEnable" >}} | bool |
| {{< prop "drawLegendEnable" >}} | bool |
| {{< prop "drawOnlySummaryEnable" >}} | bool |
| {{< prop "sortByTime" >}} | bool |
| {{< prop "drawCpuLegendEnable" >}} | bool |
| {{< prop "drawGpuLegendEnable" >}} | bool |
| {{< prop "enable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TimingViewSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TimingViewSettings {#constructor-0}
> **TimingViewSettings**()

Creates a new [TimingViewSettings](/vext/ref/fb/timingviewsettings) frostbite instance.

### TimingViewSettings {#constructor-1}
> **TimingViewSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TimingViewSettings](/vext/ref/fb/timingviewsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TimingViewSettings {#constructor-2}
> **TimingViewSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TimingViewSettings](/vext/ref/fb/timingviewsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TimingViewSettings](/vext/ref/fb/timingviewsettings). |

## Properties
### {{% prop-heading "maxFrameEventCount" %}}
> **int**

### {{% prop-heading "frameCount" %}}
> **int**

### {{% prop-heading "frameDelayCount" %}}
> **int**

### {{% prop-heading "timeRange" %}}
> **float**

### {{% prop-heading "timeOffset" %}}
> **float**

### {{% prop-heading "autolockThreshold" %}}
> **float**

### {{% prop-heading "autolockNameFilter" %}}
> **string**

### {{% prop-heading "legendScreenOffset" %}}
> **int**

### {{% prop-heading "legendColumnWidth" %}}
> **int**

### {{% prop-heading "legendDisplayMode" %}}
> **int**

### {{% prop-heading "averageFrameCount" %}}
> **int**

### {{% prop-heading "maxGpuLegendColumnCount" %}}
> **int**

### {{% prop-heading "snoopEventName" %}}
> **string**

### {{% prop-heading "gpuBarFrameOffset" %}}
> **int**

### {{% prop-heading "maxCpuLegendColumnCount" %}}
> **int**

### {{% prop-heading "barPad" %}}
> **int**

### {{% prop-heading "maxSpuLegendColumnCount" %}}
> **int**

### {{% prop-heading "barSyncProcessor" %}}
> **int**

### {{% prop-heading "barMinTime" %}}
> **float**

### {{% prop-heading "barHeight" %}}
> **int**

### {{% prop-heading "filterEventName" %}}
> **string**

### {{% prop-heading "snoopOnly" %}}
> **bool**

### {{% prop-heading "drawEnable" %}}
> **bool**

### {{% prop-heading "drawSpuLegendEnable" %}}
> **bool**

### {{% prop-heading "snoopEnable" %}}
> **bool**

### {{% prop-heading "filterEnable" %}}
> **bool**

### {{% prop-heading "drawBarsEnable" %}}
> **bool**

### {{% prop-heading "drawLegendEnable" %}}
> **bool**

### {{% prop-heading "drawOnlySummaryEnable" %}}
> **bool**

### {{% prop-heading "sortByTime" %}}
> **bool**

### {{% prop-heading "drawCpuLegendEnable" %}}
> **bool**

### {{% prop-heading "drawGpuLegendEnable" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TimingViewSettings](/vext/ref/fb/timingviewsettings) type.

