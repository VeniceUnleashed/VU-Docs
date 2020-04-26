---
title: AntMemorySettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AntMemorySettings](#constructor-0)**() |
| **[AntMemorySettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AntMemorySettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rtPoolLayersControllers" >}} | int |
| {{< prop "rtPoolStateflowControllers" >}} | int |
| {{< prop "rtPoolStateflowNodeControllers" >}} | int |
| {{< prop "rtPoolTransitionControllers" >}} | int |
| {{< prop "rtPoolClipControllers" >}} | int |
| {{< prop "rtPoolChooserControllers" >}} | int |
| {{< prop "rtPoolLoopingControllers" >}} | int |
| {{< prop "rtPoolTransparentControllers" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntMemorySettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntMemorySettings {#constructor-0}

> **AntMemorySettings**()

Creates a new [AntMemorySettings](/vext/ref/fb/antmemorysettings) frostbite instance.

### AntMemorySettings {#constructor-1}

> **AntMemorySettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntMemorySettings](/vext/ref/fb/antmemorysettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AntMemorySettings {#constructor-2}

> **AntMemorySettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AntMemorySettings](/vext/ref/fb/antmemorysettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AntMemorySettings](/vext/ref/fb/antmemorysettings). |

## Properties

### {{% prop-heading "rtPoolLayersControllers" %}}

> **int**

### {{% prop-heading "rtPoolStateflowControllers" %}}

> **int**

### {{% prop-heading "rtPoolStateflowNodeControllers" %}}

> **int**

### {{% prop-heading "rtPoolTransitionControllers" %}}

> **int**

### {{% prop-heading "rtPoolClipControllers" %}}

> **int**

### {{% prop-heading "rtPoolChooserControllers" %}}

> **int**

### {{% prop-heading "rtPoolLoopingControllers" %}}

> **int**

### {{% prop-heading "rtPoolTransparentControllers" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntMemorySettings](/vext/ref/fb/antmemorysettings) type.

