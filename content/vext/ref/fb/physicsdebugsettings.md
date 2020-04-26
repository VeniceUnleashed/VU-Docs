---
title: PhysicsDebugSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[PhysicsDebugSettings](#constructor-0)**() |
| **[PhysicsDebugSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PhysicsDebugSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "timingRecursionDepth" >}} | int |
| {{< prop "usePhysicsCpuTimers" >}} | bool |
| {{< prop "debugHingeConstraints" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PhysicsDebugSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PhysicsDebugSettings {#constructor-0}

> **PhysicsDebugSettings**()

Creates a new [PhysicsDebugSettings](/vext/ref/fb/physicsdebugsettings) frostbite instance.

### PhysicsDebugSettings {#constructor-1}

> **PhysicsDebugSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PhysicsDebugSettings](/vext/ref/fb/physicsdebugsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PhysicsDebugSettings {#constructor-2}

> **PhysicsDebugSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PhysicsDebugSettings](/vext/ref/fb/physicsdebugsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PhysicsDebugSettings](/vext/ref/fb/physicsdebugsettings). |

## Properties

### {{% prop-heading "timingRecursionDepth" %}}

> **int**

### {{% prop-heading "usePhysicsCpuTimers" %}}

> **bool**

### {{% prop-heading "debugHingeConstraints" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PhysicsDebugSettings](/vext/ref/fb/physicsdebugsettings) type.

