---
title: HdrSetting
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[HdrSetting](#constructor-0)**() |
| **[HdrSetting](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[HdrSetting](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "windowMinTop" >}} | float |
| {{< prop "windowMinBottom" >}} | float |
| {{< prop "windowTopMinReleaseTime" >}} | float |
| {{< prop "windowTopMaxReleaseTime" >}} | float |
| {{< prop "windowTopAttackTime" >}} | float |
| {{< prop "windowBottomReleaseTime" >}} | float |
| {{< prop "windowTopReleaseTimeCurve" >}} | [AudioCurve](/vext/ref/fb/audiocurve) |
| {{< prop "dischargeFactor" >}} | float |
| {{< prop "maxAllowedEnergy" >}} | float |
| {{< prop "windowBottomAttackTime" >}} | float |
| {{< prop "windowSize" >}} | float |
| {{< prop "compressFactor" >}} | float |
| {{< prop "headroom" >}} | float |
| {{< prop "allowedOvershoot" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HdrSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HdrSetting {#constructor-0}

> **HdrSetting**()

Creates a new [HdrSetting](/vext/ref/fb/hdrsetting) frostbite instance.

### HdrSetting {#constructor-1}

> **HdrSetting**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HdrSetting](/vext/ref/fb/hdrsetting) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### HdrSetting {#constructor-2}

> **HdrSetting**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [HdrSetting](/vext/ref/fb/hdrsetting). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [HdrSetting](/vext/ref/fb/hdrsetting). |

## Properties

### {{% prop-heading "windowMinTop" %}}

> **float**

### {{% prop-heading "windowMinBottom" %}}

> **float**

### {{% prop-heading "windowTopMinReleaseTime" %}}

> **float**

### {{% prop-heading "windowTopMaxReleaseTime" %}}

> **float**

### {{% prop-heading "windowTopAttackTime" %}}

> **float**

### {{% prop-heading "windowBottomReleaseTime" %}}

> **float**

### {{% prop-heading "windowTopReleaseTimeCurve" %}}

> **[AudioCurve](/vext/ref/fb/audiocurve)**

### {{% prop-heading "dischargeFactor" %}}

> **float**

### {{% prop-heading "maxAllowedEnergy" %}}

> **float**

### {{% prop-heading "windowBottomAttackTime" %}}

> **float**

### {{% prop-heading "windowSize" %}}

> **float**

### {{% prop-heading "compressFactor" %}}

> **float**

### {{% prop-heading "headroom" %}}

> **float**

### {{% prop-heading "allowedOvershoot" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HdrSetting](/vext/ref/fb/hdrsetting) type.

