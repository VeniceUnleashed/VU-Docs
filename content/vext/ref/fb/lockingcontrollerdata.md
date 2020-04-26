---
title: LockingControllerData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[LockingControllerData](#constructor-0)**() |
| **[LockingControllerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LockingControllerData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "zoomLevelLock" >}} | [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata)[] |
| {{< prop "lockTime" >}} | float |
| {{< prop "releaseTime" >}} | float |
| {{< prop "releaseOnNewTargetTime" >}} | float |
| {{< prop "sampleRate" >}} | float |
| {{< prop "holdStillThreshold" >}} | float |
| {{< prop "rayLength" >}} | float |
| {{< prop "acceptanceAngle" >}} | float |
| {{< prop "minimumLockTime" >}} | float |
| {{< prop "sensitivity" >}} | float |
| {{< prop "angleConstant" >}} | float |
| {{< prop "distanceConstant" >}} | float |
| {{< prop "lockOnWorldSpacePos" >}} | bool |
| {{< prop "lockOnVisibleTargetsOnly" >}} | bool |
| {{< prop "positionOnly" >}} | bool |
| {{< prop "lockOnEmptyVehicles" >}} | bool |
| {{< prop "ignoreHeigthLockDistance" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LockingControllerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LockingControllerData {#constructor-0}

> **LockingControllerData**()

Creates a new [LockingControllerData](/vext/ref/fb/lockingcontrollerdata) frostbite instance.

### LockingControllerData {#constructor-1}

> **LockingControllerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LockingControllerData](/vext/ref/fb/lockingcontrollerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LockingControllerData {#constructor-2}

> **LockingControllerData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LockingControllerData](/vext/ref/fb/lockingcontrollerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LockingControllerData](/vext/ref/fb/lockingcontrollerdata). |

## Properties

### {{% prop-heading "zoomLevelLock" %}}

> **[ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata)**[]

### {{% prop-heading "lockTime" %}}

> **float**

### {{% prop-heading "releaseTime" %}}

> **float**

### {{% prop-heading "releaseOnNewTargetTime" %}}

> **float**

### {{% prop-heading "sampleRate" %}}

> **float**

### {{% prop-heading "holdStillThreshold" %}}

> **float**

### {{% prop-heading "rayLength" %}}

> **float**

### {{% prop-heading "acceptanceAngle" %}}

> **float**

### {{% prop-heading "minimumLockTime" %}}

> **float**

### {{% prop-heading "sensitivity" %}}

> **float**

### {{% prop-heading "angleConstant" %}}

> **float**

### {{% prop-heading "distanceConstant" %}}

> **float**

### {{% prop-heading "lockOnWorldSpacePos" %}}

> **bool**

### {{% prop-heading "lockOnVisibleTargetsOnly" %}}

> **bool**

### {{% prop-heading "positionOnly" %}}

> **bool**

### {{% prop-heading "lockOnEmptyVehicles" %}}

> **bool**

### {{% prop-heading "ignoreHeigthLockDistance" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LockingControllerData](/vext/ref/fb/lockingcontrollerdata) type.

