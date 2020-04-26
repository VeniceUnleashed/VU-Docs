---
title: EmitterSystemSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[EmitterSystemSettings](#constructor-0)**() |
| **[EmitterSystemSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EmitterSystemSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "meshDrawCountLimit" >}} | int |
| {{< prop "timeScale" >}} | float |
| {{< prop "globalResetStartTimeInterval" >}} | float |
| {{< prop "quadHalfResSlice2ThresholdLow" >}} | float |
| {{< prop "quadHalfResSlice2ThresholdHigh" >}} | float |
| {{< prop "quadHalfResSlice1ThresholdLow" >}} | float |
| {{< prop "quadHalfResSlice1ThresholdHigh" >}} | float |
| {{< prop "debugOverdrawCount" >}} | int |
| {{< prop "drawStats" >}} | int |
| {{< prop "meshStreamingPriorityMultiplier" >}} | float |
| {{< prop "quadZOcclusionBias" >}} | float |
| {{< prop "drawBoundingBoxes" >}} | int |
| {{< prop "minScreenArea" >}} | float |
| {{< prop "quadNearFadeDistance" >}} | float |
| {{< prop "quadTechnique" >}} | int |
| {{< prop "meshCullingDistance" >}} | float |
| {{< prop "enableFixedTimeStep" >}} | bool |
| {{< prop "zBufferCullEnable" >}} | bool |
| {{< prop "quadEnableOverdrawRendering" >}} | bool |
| {{< prop "quadColorShaderCostsEnable" >}} | bool |
| {{< prop "drawProjectedBoxes" >}} | bool |
| {{< prop "quadSimpleRenderingEnable" >}} | bool |
| {{< prop "enableJobs" >}} | bool |
| {{< prop "enableRendering" >}} | bool |
| {{< prop "quadHalfResEnable" >}} | bool |
| {{< prop "quadEnableRendering" >}} | bool |
| {{< prop "enableFixedDelta" >}} | bool |
| {{< prop "quadClipScaleEnable" >}} | bool |
| {{< prop "quadNiceRenderingEnable" >}} | bool |
| {{< prop "quadGroupsJoinAll" >}} | bool |
| {{< prop "quadGroupsJoinNone" >}} | bool |
| {{< prop "quadGroupsJoinNiceAndSimple" >}} | bool |
| {{< prop "quadEnableOpaque" >}} | bool |
| {{< prop "quadVertexShadowsEnable" >}} | bool |
| {{< prop "quadPointLightsEnable" >}} | bool |
| {{< prop "quadSpotLightsEnable" >}} | bool |
| {{< prop "quadEnableSorting" >}} | bool |
| {{< prop "meshRenderingEnable" >}} | bool |
| {{< prop "meshDrawTransforms" >}} | bool |
| {{< prop "meshDrawBoundingBoxes" >}} | bool |
| {{< prop "meshShadowEnable" >}} | bool |
| {{< prop "quadEnableWireframe" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "quadEnableZOcclusion" >}} | bool |
| {{< prop "meshDrawCullStats" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EmitterSystemSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EmitterSystemSettings {#constructor-0}

> **EmitterSystemSettings**()

Creates a new [EmitterSystemSettings](/vext/ref/fb/emittersystemsettings) frostbite instance.

### EmitterSystemSettings {#constructor-1}

> **EmitterSystemSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EmitterSystemSettings](/vext/ref/fb/emittersystemsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EmitterSystemSettings {#constructor-2}

> **EmitterSystemSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EmitterSystemSettings](/vext/ref/fb/emittersystemsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EmitterSystemSettings](/vext/ref/fb/emittersystemsettings). |

## Properties

### {{% prop-heading "meshDrawCountLimit" %}}

> **int**

### {{% prop-heading "timeScale" %}}

> **float**

### {{% prop-heading "globalResetStartTimeInterval" %}}

> **float**

### {{% prop-heading "quadHalfResSlice2ThresholdLow" %}}

> **float**

### {{% prop-heading "quadHalfResSlice2ThresholdHigh" %}}

> **float**

### {{% prop-heading "quadHalfResSlice1ThresholdLow" %}}

> **float**

### {{% prop-heading "quadHalfResSlice1ThresholdHigh" %}}

> **float**

### {{% prop-heading "debugOverdrawCount" %}}

> **int**

### {{% prop-heading "drawStats" %}}

> **int**

### {{% prop-heading "meshStreamingPriorityMultiplier" %}}

> **float**

### {{% prop-heading "quadZOcclusionBias" %}}

> **float**

### {{% prop-heading "drawBoundingBoxes" %}}

> **int**

### {{% prop-heading "minScreenArea" %}}

> **float**

### {{% prop-heading "quadNearFadeDistance" %}}

> **float**

### {{% prop-heading "quadTechnique" %}}

> **int**

### {{% prop-heading "meshCullingDistance" %}}

> **float**

### {{% prop-heading "enableFixedTimeStep" %}}

> **bool**

### {{% prop-heading "zBufferCullEnable" %}}

> **bool**

### {{% prop-heading "quadEnableOverdrawRendering" %}}

> **bool**

### {{% prop-heading "quadColorShaderCostsEnable" %}}

> **bool**

### {{% prop-heading "drawProjectedBoxes" %}}

> **bool**

### {{% prop-heading "quadSimpleRenderingEnable" %}}

> **bool**

### {{% prop-heading "enableJobs" %}}

> **bool**

### {{% prop-heading "enableRendering" %}}

> **bool**

### {{% prop-heading "quadHalfResEnable" %}}

> **bool**

### {{% prop-heading "quadEnableRendering" %}}

> **bool**

### {{% prop-heading "enableFixedDelta" %}}

> **bool**

### {{% prop-heading "quadClipScaleEnable" %}}

> **bool**

### {{% prop-heading "quadNiceRenderingEnable" %}}

> **bool**

### {{% prop-heading "quadGroupsJoinAll" %}}

> **bool**

### {{% prop-heading "quadGroupsJoinNone" %}}

> **bool**

### {{% prop-heading "quadGroupsJoinNiceAndSimple" %}}

> **bool**

### {{% prop-heading "quadEnableOpaque" %}}

> **bool**

### {{% prop-heading "quadVertexShadowsEnable" %}}

> **bool**

### {{% prop-heading "quadPointLightsEnable" %}}

> **bool**

### {{% prop-heading "quadSpotLightsEnable" %}}

> **bool**

### {{% prop-heading "quadEnableSorting" %}}

> **bool**

### {{% prop-heading "meshRenderingEnable" %}}

> **bool**

### {{% prop-heading "meshDrawTransforms" %}}

> **bool**

### {{% prop-heading "meshDrawBoundingBoxes" %}}

> **bool**

### {{% prop-heading "meshShadowEnable" %}}

> **bool**

### {{% prop-heading "quadEnableWireframe" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "quadEnableZOcclusion" %}}

> **bool**

### {{% prop-heading "meshDrawCullStats" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EmitterSystemSettings](/vext/ref/fb/emittersystemsettings) type.

