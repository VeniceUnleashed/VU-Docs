---
title: MeshStreamingSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MeshStreamingSettings](#constructor-0)**() |
| **[MeshStreamingSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MeshStreamingSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defragTransferLimit" >}} | int |
| {{< prop "listViewPageIndex" >}} | int |
| {{< prop "poolSize" >}} | int |
| {{< prop "forceLod" >}} | int |
| {{< prop "poolHeadroomSize" >}} | int |
| {{< prop "listViewSortOrder" >}} | int |
| {{< prop "ps3CellDefragTransferLimit" >}} | int |
| {{< prop "xenonFinalPoolSizeAdjustment" >}} | int |
| {{< prop "maxUnloadCountPerFrame" >}} | int |
| {{< prop "xenonRetailPoolSizeAdjustment" >}} | int |
| {{< prop "maxPendingLoadCount" >}} | int |
| {{< prop "ps3CellPoolSize" >}} | int |
| {{< prop "ps3CellPoolHeadroomSize" >}} | int |
| {{< prop "instantUnloadingEnable" >}} | bool |
| {{< prop "asyncCreatesEnable" >}} | bool |
| {{< prop "dxImmutableUsageEnable" >}} | bool |
| {{< prop "overridePoolSizes" >}} | bool |
| {{< prop "useSlowTexturePrio" >}} | bool |
| {{< prop "updateEnable" >}} | bool |
| {{< prop "dynamicLoadingEnable" >}} | bool |
| {{< prop "priorityJobEnable" >}} | bool |
| {{< prop "prioritySpuJobEnable" >}} | bool |
| {{< prop "updateJobEnable" >}} | bool |
| {{< prop "defragTransfersEnable" >}} | bool |
| {{< prop "prioritizeVisibleMeshesFirstEnable" >}} | bool |
| {{< prop "prioritizeVisibleLodsFirstEnable" >}} | bool |
| {{< prop "prioritizeVisibleLoadsEnable" >}} | bool |
| {{< prop "prioritizeTexturesEnable" >}} | bool |
| {{< prop "highestPriorityEnable" >}} | bool |
| {{< prop "prioritizeNearestPointEnable" >}} | bool |
| {{< prop "drawInstanceBoxesEnable" >}} | bool |
| {{< prop "drawStatsEnable" >}} | bool |
| {{< prop "drawMissingListEnable" >}} | bool |
| {{< prop "drawPriorityListEnable" >}} | bool |
| {{< prop "drawLoadingListEnable" >}} | bool |
| {{< prop "drawMeshListEnable" >}} | bool |
| {{< prop "drawNonStreamedListEnable" >}} | bool |
| {{< prop "defragEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "dumpLoadedList" >}} | bool |
| {{< prop "useConditionalStreaming" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MeshStreamingSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MeshStreamingSettings {#constructor-0}

> **MeshStreamingSettings**()

Creates a new [MeshStreamingSettings](/vext/ref/fb/meshstreamingsettings) frostbite instance.

### MeshStreamingSettings {#constructor-1}

> **MeshStreamingSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MeshStreamingSettings](/vext/ref/fb/meshstreamingsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MeshStreamingSettings {#constructor-2}

> **MeshStreamingSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MeshStreamingSettings](/vext/ref/fb/meshstreamingsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MeshStreamingSettings](/vext/ref/fb/meshstreamingsettings). |

## Properties

### {{% prop-heading "defragTransferLimit" %}}

> **int**

### {{% prop-heading "listViewPageIndex" %}}

> **int**

### {{% prop-heading "poolSize" %}}

> **int**

### {{% prop-heading "forceLod" %}}

> **int**

### {{% prop-heading "poolHeadroomSize" %}}

> **int**

### {{% prop-heading "listViewSortOrder" %}}

> **int**

### {{% prop-heading "ps3CellDefragTransferLimit" %}}

> **int**

### {{% prop-heading "xenonFinalPoolSizeAdjustment" %}}

> **int**

### {{% prop-heading "maxUnloadCountPerFrame" %}}

> **int**

### {{% prop-heading "xenonRetailPoolSizeAdjustment" %}}

> **int**

### {{% prop-heading "maxPendingLoadCount" %}}

> **int**

### {{% prop-heading "ps3CellPoolSize" %}}

> **int**

### {{% prop-heading "ps3CellPoolHeadroomSize" %}}

> **int**

### {{% prop-heading "instantUnloadingEnable" %}}

> **bool**

### {{% prop-heading "asyncCreatesEnable" %}}

> **bool**

### {{% prop-heading "dxImmutableUsageEnable" %}}

> **bool**

### {{% prop-heading "overridePoolSizes" %}}

> **bool**

### {{% prop-heading "useSlowTexturePrio" %}}

> **bool**

### {{% prop-heading "updateEnable" %}}

> **bool**

### {{% prop-heading "dynamicLoadingEnable" %}}

> **bool**

### {{% prop-heading "priorityJobEnable" %}}

> **bool**

### {{% prop-heading "prioritySpuJobEnable" %}}

> **bool**

### {{% prop-heading "updateJobEnable" %}}

> **bool**

### {{% prop-heading "defragTransfersEnable" %}}

> **bool**

### {{% prop-heading "prioritizeVisibleMeshesFirstEnable" %}}

> **bool**

### {{% prop-heading "prioritizeVisibleLodsFirstEnable" %}}

> **bool**

### {{% prop-heading "prioritizeVisibleLoadsEnable" %}}

> **bool**

### {{% prop-heading "prioritizeTexturesEnable" %}}

> **bool**

### {{% prop-heading "highestPriorityEnable" %}}

> **bool**

### {{% prop-heading "prioritizeNearestPointEnable" %}}

> **bool**

### {{% prop-heading "drawInstanceBoxesEnable" %}}

> **bool**

### {{% prop-heading "drawStatsEnable" %}}

> **bool**

### {{% prop-heading "drawMissingListEnable" %}}

> **bool**

### {{% prop-heading "drawPriorityListEnable" %}}

> **bool**

### {{% prop-heading "drawLoadingListEnable" %}}

> **bool**

### {{% prop-heading "drawMeshListEnable" %}}

> **bool**

### {{% prop-heading "drawNonStreamedListEnable" %}}

> **bool**

### {{% prop-heading "defragEnable" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "dumpLoadedList" %}}

> **bool**

### {{% prop-heading "useConditionalStreaming" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MeshStreamingSettings](/vext/ref/fb/meshstreamingsettings) type.

