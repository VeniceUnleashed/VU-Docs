---
title: DxDisplaySettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[DxDisplaySettings](#constructor-0)**() |
| **[DxDisplaySettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DxDisplaySettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[DxDisplaySettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fullscreenWidth" >}} | int |
| {{< prop "fullscreenHeight" >}} | int |
| {{< prop "amdMinDriverVersion" >}} | string |
| {{< prop "nvidiaMinDriverVersion" >}} | int |
| {{< prop "fullscreenRefreshRate" >}} | float |
| {{< prop "stereoSeparationScale" >}} | float |
| {{< prop "stereoDepth" >}} | float |
| {{< prop "fullscreenOutputIndex" >}} | int |
| {{< prop "debugBreakIgnoredIDs" >}} | int[] |
| {{< prop "stereoConvergenceScale" >}} | float |
| {{< prop "stereoSoldierZoomConvergenceScale" >}} | float |
| {{< prop "forceRenderAheadLimit" >}} | int |
| {{< prop "presentInterval" >}} | int |
| {{< prop "debugBreakOnWarningEnable" >}} | bool |
| {{< prop "debugInfoEnable" >}} | bool |
| {{< prop "fullscreen" >}} | bool |
| {{< prop "debugBreakOnErrorEnable" >}} | bool |
| {{< prop "createMinimalWindow" >}} | bool |
| {{< prop "driverInternalThreadingEnable" >}} | bool |
| {{< prop "debugBreakOnInfoEnable" >}} | bool |
| {{< prop "fullscreenModeEnable" >}} | bool |
| {{< prop "vSyncEnable" >}} | bool |
| {{< prop "tripleBufferingEnable" >}} | bool |
| {{< prop "dx10PlusEnable" >}} | bool |
| {{< prop "nvApiEnable" >}} | bool |
| {{< prop "nvPerfHudEnable" >}} | bool |
| {{< prop "stereoEnable" >}} | bool |
| {{< prop "dx11Enable" >}} | bool |
| {{< prop "dx10Dot0Enable" >}} | bool |
| {{< prop "refDriverEnable" >}} | bool |
| {{< prop "dx10Dot1Enable" >}} | bool |
| {{< prop "minDriverRequired" >}} | bool |
| {{< prop "warpDriverEnable" >}} | bool |
| {{< prop "nullDriverEnable" >}} | bool |
| {{< prop "multiGpuValidationEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DxDisplaySettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DxDisplaySettings {#constructor-0}

> **DxDisplaySettings**()

Creates a new [DxDisplaySettings](/vext/ref/fb/dxdisplaysettings) frostbite instance.

### DxDisplaySettings {#constructor-1}

> **DxDisplaySettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DxDisplaySettings](/vext/ref/fb/dxdisplaysettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DxDisplaySettings {#constructor-2}

> **DxDisplaySettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [DxDisplaySettings](/vext/ref/fb/dxdisplaysettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [DxDisplaySettings](/vext/ref/fb/dxdisplaysettings). |

### DxDisplaySettings {#constructor-3}

> **DxDisplaySettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DxDisplaySettings](/vext/ref/fb/dxdisplaysettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DxDisplaySettings](/vext/ref/fb/dxdisplaysettings). |

## Properties

### {{% prop-heading "fullscreenWidth" %}}

> **int**

### {{% prop-heading "fullscreenHeight" %}}

> **int**

### {{% prop-heading "amdMinDriverVersion" %}}

> **string**

### {{% prop-heading "nvidiaMinDriverVersion" %}}

> **int**

### {{% prop-heading "fullscreenRefreshRate" %}}

> **float**

### {{% prop-heading "stereoSeparationScale" %}}

> **float**

### {{% prop-heading "stereoDepth" %}}

> **float**

### {{% prop-heading "fullscreenOutputIndex" %}}

> **int**

### {{% prop-heading "debugBreakIgnoredIDs" %}}

> **int**[]

### {{% prop-heading "stereoConvergenceScale" %}}

> **float**

### {{% prop-heading "stereoSoldierZoomConvergenceScale" %}}

> **float**

### {{% prop-heading "forceRenderAheadLimit" %}}

> **int**

### {{% prop-heading "presentInterval" %}}

> **int**

### {{% prop-heading "debugBreakOnWarningEnable" %}}

> **bool**

### {{% prop-heading "debugInfoEnable" %}}

> **bool**

### {{% prop-heading "fullscreen" %}}

> **bool**

### {{% prop-heading "debugBreakOnErrorEnable" %}}

> **bool**

### {{% prop-heading "createMinimalWindow" %}}

> **bool**

### {{% prop-heading "driverInternalThreadingEnable" %}}

> **bool**

### {{% prop-heading "debugBreakOnInfoEnable" %}}

> **bool**

### {{% prop-heading "fullscreenModeEnable" %}}

> **bool**

### {{% prop-heading "vSyncEnable" %}}

> **bool**

### {{% prop-heading "tripleBufferingEnable" %}}

> **bool**

### {{% prop-heading "dx10PlusEnable" %}}

> **bool**

### {{% prop-heading "nvApiEnable" %}}

> **bool**

### {{% prop-heading "nvPerfHudEnable" %}}

> **bool**

### {{% prop-heading "stereoEnable" %}}

> **bool**

### {{% prop-heading "dx11Enable" %}}

> **bool**

### {{% prop-heading "dx10Dot0Enable" %}}

> **bool**

### {{% prop-heading "refDriverEnable" %}}

> **bool**

### {{% prop-heading "dx10Dot1Enable" %}}

> **bool**

### {{% prop-heading "minDriverRequired" %}}

> **bool**

### {{% prop-heading "warpDriverEnable" %}}

> **bool**

### {{% prop-heading "nullDriverEnable" %}}

> **bool**

### {{% prop-heading "multiGpuValidationEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DxDisplaySettings](/vext/ref/fb/dxdisplaysettings) type.

