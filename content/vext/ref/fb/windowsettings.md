---
title: WindowSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[WindowSettings](#constructor-0)**() |
| **[WindowSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WindowSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[WindowSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "posX" >}} | int |
| {{< prop "posY" >}} | int |
| {{< prop "width" >}} | int |
| {{< prop "height" >}} | int |
| {{< prop "bordersEnable" >}} | bool |
| {{< prop "autoSize" >}} | bool |
| {{< prop "fullscreenAutoSize" >}} | bool |
| {{< prop "fullscreenWhenJoiningServer" >}} | bool |
| {{< prop "enableEscape" >}} | bool |
| {{< prop "enableInputOnActivate" >}} | bool |
| {{< prop "hibernateOnClose" >}} | bool |
| {{< prop "hidden" >}} | bool |
| {{< prop "minimized" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WindowSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WindowSettings {#constructor-0}

> **WindowSettings**()

Creates a new [WindowSettings](/vext/ref/fb/windowsettings) frostbite instance.

### WindowSettings {#constructor-1}

> **WindowSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WindowSettings](/vext/ref/fb/windowsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WindowSettings {#constructor-2}

> **WindowSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [WindowSettings](/vext/ref/fb/windowsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [WindowSettings](/vext/ref/fb/windowsettings). |

### WindowSettings {#constructor-3}

> **WindowSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WindowSettings](/vext/ref/fb/windowsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WindowSettings](/vext/ref/fb/windowsettings). |

## Properties

### {{% prop-heading "posX" %}}

> **int**

### {{% prop-heading "posY" %}}

> **int**

### {{% prop-heading "width" %}}

> **int**

### {{% prop-heading "height" %}}

> **int**

### {{% prop-heading "bordersEnable" %}}

> **bool**

### {{% prop-heading "autoSize" %}}

> **bool**

### {{% prop-heading "fullscreenAutoSize" %}}

> **bool**

### {{% prop-heading "fullscreenWhenJoiningServer" %}}

> **bool**

### {{% prop-heading "enableEscape" %}}

> **bool**

### {{% prop-heading "enableInputOnActivate" %}}

> **bool**

### {{% prop-heading "hibernateOnClose" %}}

> **bool**

### {{% prop-heading "hidden" %}}

> **bool**

### {{% prop-heading "minimized" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WindowSettings](/vext/ref/fb/windowsettings) type.

