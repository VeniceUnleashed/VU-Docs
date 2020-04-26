---
title: AlternateCameraViewData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AlternateCameraViewData](#constructor-0)**() |
| **[AlternateCameraViewData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AlternateCameraViewData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "meshOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "hud" >}} | [HudData](/vext/ref/fb/huddata) |
| {{< prop "fieldOfView" >}} | float |
| {{< prop "worldSpaceLockEfficiency" >}} | float |
| {{< prop "mesh" >}} | [RigidMeshAsset](/vext/ref/fb/rigidmeshasset) \| nil |
| {{< prop "maskMeshBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "fadeInDuration" >}} | float |
| {{< prop "fovTransitionTime" >}} | float |
| {{< prop "blackDuration" >}} | float |
| {{< prop "inputSuppression" >}} | [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) |
| {{< prop "screenExposureAreaScale" >}} | float |
| {{< prop "fadeOutDuration" >}} | float |
| {{< prop "allowFieldOfViewScaling" >}} | bool |
| {{< prop "lockMeshToRenderView" >}} | bool |
| {{< prop "toggleViewChange" >}} | bool |
| {{< prop "useProfileOptionForToggleViewChange" >}} | bool |
| {{< prop "flirEnabled" >}} | bool |
| {{< prop "fadeToBlack" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AlternateCameraViewData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AlternateCameraViewData {#constructor-0}

> **AlternateCameraViewData**()

Creates a new [AlternateCameraViewData](/vext/ref/fb/alternatecameraviewdata) frostbite instance.

### AlternateCameraViewData {#constructor-1}

> **AlternateCameraViewData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AlternateCameraViewData](/vext/ref/fb/alternatecameraviewdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AlternateCameraViewData {#constructor-2}

> **AlternateCameraViewData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AlternateCameraViewData](/vext/ref/fb/alternatecameraviewdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AlternateCameraViewData](/vext/ref/fb/alternatecameraviewdata). |

## Properties

### {{% prop-heading "meshOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "hud" %}}

> **[HudData](/vext/ref/fb/huddata)**

### {{% prop-heading "fieldOfView" %}}

> **float**

### {{% prop-heading "worldSpaceLockEfficiency" %}}

> **float**

### {{% prop-heading "mesh" %}}

> **[RigidMeshAsset](/vext/ref/fb/rigidmeshasset)** \| **nil**

### {{% prop-heading "maskMeshBlueprint" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** \| **nil**

### {{% prop-heading "fadeInDuration" %}}

> **float**

### {{% prop-heading "fovTransitionTime" %}}

> **float**

### {{% prop-heading "blackDuration" %}}

> **float**

### {{% prop-heading "inputSuppression" %}}

> **[InputSuppressionData](/vext/ref/fb/inputsuppressiondata)**

### {{% prop-heading "screenExposureAreaScale" %}}

> **float**

### {{% prop-heading "fadeOutDuration" %}}

> **float**

### {{% prop-heading "allowFieldOfViewScaling" %}}

> **bool**

### {{% prop-heading "lockMeshToRenderView" %}}

> **bool**

### {{% prop-heading "toggleViewChange" %}}

> **bool**

### {{% prop-heading "useProfileOptionForToggleViewChange" %}}

> **bool**

### {{% prop-heading "flirEnabled" %}}

> **bool**

### {{% prop-heading "fadeToBlack" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AlternateCameraViewData](/vext/ref/fb/alternatecameraviewdata) type.

