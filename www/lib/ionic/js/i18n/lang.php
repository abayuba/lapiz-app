<?php

/**
 * @author Jasman
 * @copyright 2017
 */


$lang = array(
        'af' => 'Afrikaans',
        'sq' => 'Albanian',
        'ar' => 'Arabic',
        'ar_dz' => 'Arabic - Algeria',
        'ar_bh' => 'Arabic - Bahrain',
        'ar_eg' => 'Arabic - Egypt',
        'ar_iq' => 'Arabic - Iraq',
        'ar_jo' => 'Arabic - Jordan',
        'ar_kw' => 'Arabic - Kuwait',
        'ar_lb' => 'Arabic - Lebanon',
        'ar_ly' => 'Arabic - Libya',
        'ar_ma' => 'Arabic - Morocco',
        'ar_om' => 'Arabic - Oman',
        'ar_qa' => 'Arabic - Qatar',
        'ar_sa' => 'Arabic - Saudi Arabia',
        'ar_sy' => 'Arabic - Syria',
        'ar_tn' => 'Arabic - Tunisia',
        'ar_ae' => 'Arabic - U.A.E.',
        'ar_ye' => 'Arabic - Yemen',
        'be' => 'Belarussian',
        'bg' => 'Bulgarian',
        'zh' => 'Chinese',
        'zh_cn' => 'Chinese - Simplified',
        'zh_tw' => 'Chinese - Traditional',
        'zh_hk' => 'Chinese - Hong Kong',
        'zh_mo' => 'Chinese - Macau SAR',
        'zh_sg' => 'Chinese - Singapore',
        'hr' => 'Croatian',
        'cz' => 'Czech',
        'da' => 'Danish',
        'nl' => 'Dutch',
        'nl_be' => 'Dutch - Belgium',
        'en' => 'English',
        'en_au' => 'English - Australia',
        'en_bz' => 'English - Belize',
        'en_ca' => 'English - Canada',
        'en_ie' => 'English - Ireland',
        'en_jm' => 'English - Jamaica',
        'en_nz' => 'English - New Zealand',
        'en_ph' => 'English - Philippines',
        'en_za' => 'English - South Africa',
        'en_tt' => 'English - Trinidad',
        'en_gb' => 'English - UK',
        'en_us' => 'English - US',
        'en_zw' => 'English - Zimbabwe',
        'et' => 'Estonian',
        'fi' => 'Finnish',
        'fr' => 'French',
        'fr_be' => 'French - Belgium',
        'fr_ca' => 'French - Canada',
        'fr_lu' => 'French - Luxembourg',
        'fr_mc' => 'French - Monaco',
        'fr_ch' => 'French - Switzerland',
        'de' => 'German',
        'de_at' => 'German - Austria',
        'de_li' => 'German - Liechtenstein',
        'de_lu' => 'German - Luxembourg',
        'de_ch' => 'German - Switzerland',
        'el' => 'Greek',
        'iw' => 'Hebrew',
        'hi' => 'Hindi',
        'hu' => 'Hungarian',
        'is' => 'Icelandic',
        'id' => 'Indonesian',
        'it' => 'Italian',
        'it_ch' => 'Italian - Switzerland',
        'ja' => 'Japanese',
        'ko' => 'Korean',
        'lv' => 'Latvian',
        'lt' => 'Lithuanian',
        'mk' => 'Macedonian',
        'ms' => 'Malay',
        'no' => 'Norwegian',
        'pl' => 'Polish',
        'pt' => 'Portuguese',
        'pt_br' => 'Portuguese - Brazil',
        'ro' => 'Romanian',
        'ru' => 'Russian',
        'ru_md' => 'Russian - Moldova',
        'sr' => 'Serbian',
        'sh' => 'Serbo-Croatian',
        'sk' => 'Slovak',
        'sl' => 'Slovenian',
        'es' => 'Spanish',
        'es_ar' => 'Spanish - Argentina',
        'es_bo' => 'Spanish - Bolivia',
        'es_cl' => 'Spanish - Chile',
        'es_co' => 'Spanish - Colombia',
        'es_cr' => 'Spanish - Costa Rica',
        'es_do' => 'Spanish - Dominican Republic',
        'es_ec' => 'Spanish - Ecuador',
        'es_sv' => 'Spanish - El Salvador',
        'es_gt' => 'Spanish - Guatemala',
        'es_hn' => 'Spanish - Honduras',
        'es_mx' => 'Spanish - Mexico',
        'es_ni' => 'Spanish - Nicaragua',
        'es_pa' => 'Spanish - Panama',
        'es_py' => 'Spanish - Paraguay',
        'es_pe' => 'Spanish - Peru',
        'es_pr' => 'Spanish - Puerto Rico',
        'es_us' => 'Spanish - United States',
        'es_uy' => 'Spanish - Uruguay',
        'es_ve' => 'Spanish - Venezuela',
        'sv' => 'Swedish',
        'sv_fi' => 'Swedish - Finland',
        'tl' => 'Tagalog',
        'th' => 'Thai',
        'tr' => 'Turkish',
        'uk' => 'Ukrainian',
        'vi' => 'Vietnamese'
        );



foreach (glob("*.js") as $filename) {
    echo $filename;
    $prefix_lang = "" .str_replace(".js","", end(explode('_', basename($filename)))) ;
    if(isset($lang[ str_replace('-','_', $prefix_lang) ])){
        $new_lang[$prefix_lang]['label'] = $lang[ str_replace('-','_', $prefix_lang) ] . '';
        $new_lang[$prefix_lang]['prefix'] = $prefix_lang;
    }else{
         //$new_lang[$prefix_lang] = ''. '('.$prefix_lang.')';
    }
}
 
foreach($new_lang as $lang){
    echo "\$lang[] = array('prefix'=>'".$lang['prefix']."','label'=>'".$lang['label']."');\r\n";
}

?>